import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { MdCardModule } from '@angular/material';
import { AddressComponent } from './address.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:9002/gql-ubc-2'
  })
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports: [
    CommonModule,
    AddressRoutingModule,
    ApolloModule.forRoot(provideClient),
    MdCardModule,
  ],
  declarations: [AddressComponent],
  exports: [AddressComponent]
})
export class AddressModule { }
