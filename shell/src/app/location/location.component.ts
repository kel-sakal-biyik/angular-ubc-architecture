import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GetLocation = gql`
  query GetDecibel {
    location {
      latitude
      longitude
    }
  }
`;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{
  public latitude: number;
  public longitude: number;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: GetLocation,
      pollInterval: 10000
    }).subscribe(({data}) => {
      this.latitude = data.location.latitude;
      this.longitude = data.location.longitude;
    });
  }
}
