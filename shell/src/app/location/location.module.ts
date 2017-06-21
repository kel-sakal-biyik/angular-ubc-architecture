import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { MdCardModule } from '@angular/material';
import { LocationComponent } from './location.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:9001/gql-ubc-1'
  })
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule,
    ApolloModule.forRoot(provideClient),
    MdCardModule,
  ],
  declarations: [LocationComponent],
  exports: [LocationComponent]
})
export class LocationModule { }
