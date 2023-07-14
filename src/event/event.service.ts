import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { single } from 'rxjs';
const prisma = new PrismaClient();

@Injectable()
export class EventService {

    async getAllEvent() {
        const eventsData = await prisma.events.findMany();
        return eventsData;
      }

      async getEventById(id: string) {
        const singleEvent = await prisma.events.findFirst({
            where: {
              id: id,
            },
          });

        return singleEvent;
      }

      async getEventByCategory(category: string) {
        const categoryEvent = await prisma.events.findMany({
            where: {
              category: category,
            },
          });
          
        return categoryEvent;
      }

      async getEventByCity(city: string) {
        const cityEvents = await prisma.events.findMany({
            where: {
              region: city,
            },
          });
          
        return cityEvents;
      }

      async getEventByVenue(venue: string) {
        const venueEvents = await prisma.events.findMany({
            where: {
              venue: venue,
            },
          });
          
        return venueEvents;
      }

      async getEventByTag(tag: string) {
        const tagEvents = await prisma.events.findMany({
            where: {
              web_tag_groups: tag,
            },
          });
          
        return tagEvents;
      }

      async getEventAllTags() {
        const tagEvents = await prisma.tags.findMany()
          
        return tagEvents;
      }

      async getEventAllCities() {
        const citiesEvent = await prisma.cities.findMany()
          
        return citiesEvent;
      }
      async getEventAllCategories() {
        const categoriesEvents = await prisma.categories.findMany()
          
        return categoriesEvents;
      }
      async getEventAllVenues() {
        const venueEvents = await prisma.venues.findMany()
          
        return venueEvents;
      }
  
  
  
      

}



// In a service or controller method
