import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { EventService } from "./event.service"

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
}
