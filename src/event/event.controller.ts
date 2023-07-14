import { Controller, Get, Param, ParseEnumPipe, ParseUUIDPipe } from '@nestjs/common';
import { EventService } from "./event.service"
import { type } from 'os';

export  enum EventSub {
    VENUE = "venues",
    CITIES = "cities",
    TAGS = "tags",
    CATEGORIES = "categories"
}

@Controller('event')
export class EventController {

    constructor(private readonly eventService: EventService){}

    @Get()
    getAllData() {
        return this.eventService.getAllEvent()
    }

    @Get(':id')
    getEventById( @Param('id', ParseUUIDPipe) id: string)  {
        return this.eventService.getEventById(id)
    }

    @Get('category/:category')
    getEventByCategory(@Param('category') category: string) {
        return this.eventService.getEventByCategory(category)
    }

    @Get('city/:city')
    getEventByCity(@Param('city') city: string) {
        return this.eventService.getEventByCity(city)
    }

    @Get('venue/:venue')
    getEventByvenue(@Param('venue') venue: string) {
        return this.eventService.getEventByVenue(venue)
    }

    @Get('tag/:tag')
    getEventBytag(@Param('tag') tag: string) {
        return this.eventService.getEventByTag(tag)
    }

    @Get('all/venues')
    getEventAllVenues() {
        return this.eventService.getEventAllVenues()
    }

    @Get('all/tags')
    getEventAllTags() {
        return this.eventService.getEventAllTags()
    }

    @Get('all/cities')
    getEventAllCities() {
        return this.eventService.getEventAllCities()
    }

    @Get('all/categories')
    getEventAllCategories() {
        return this.eventService.getEventAllCategories()
    }


}
