import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GetAddress = gql`
  query GetAddress {
    info {
      firstname
      address {
        id
        country
      }
      address {
        id
        zip
      }
    } 
  }
`;

const ChangeAddress = gql`
    mutation ChangeAddress {
      changeAddress {
        id
        country
      }
    }
`;

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public country: string;
  public city: string;
  public zip: string;
  public street: string;
  public address: string;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: GetAddress
    }).do(() => {console.log('SIDE EFFECT!!!')}).subscribe(({data}) => {
      this.country = data.info.address.country;
      this.city = data.info.address.city;
      this.zip = data.info.address.zip;
      this.street = data.info.address.street;
      this.address = data.info.address.address;
    });

    setTimeout(() => {
      console.log('mutate');
      this.apollo.mutate({
        mutation: ChangeAddress
      })
    }, 1000)
  }
}
