import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GetAddress = gql`
  query GetDecibel {
      address {
      country
      city
      zip
      street
      address
    } 
  }
`;

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{
  public country: string;
  public city: string;
  public zip: string;
  public street: string;
  public address: string;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: GetAddress,
      pollInterval: 10000
    }).subscribe(({data}) => {
      this.country = data.address.country;
      this.city = data.address.city;
      this.zip = data.address.zip;
      this.street = data.address.street;
      this.address = data.address.address;
    });
  }
}
