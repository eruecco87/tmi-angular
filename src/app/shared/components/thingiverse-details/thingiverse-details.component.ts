import { Component, ViewEncapsulation, OnInit, Input, OnDestroy } from '@angular/core';

// RXJS
import { Subscription } from 'rxjs';

// Models
import { ThingiverseThing, ThingiverseImage, ThingiverseFile } from '@core/services/thingiverse/models';

// Services
import { ThingiverseService } from '@core/services/thingiverse/thingiverse.service';

@Component({
  selector: 'app-thingiverse-details',
  templateUrl: './thingiverse-details.component.html',
  styleUrls: ['./thingiverse-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThingiverseDetailsComponent implements OnInit, OnDestroy {

  @Input() id: string;

  public thing: ThingiverseThing;
  public images: ThingiverseImage[];
  public files: ThingiverseFile[];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private thingiverseService: ThingiverseService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.thingiverseService.getThing(this.id).subscribe((thing: ThingiverseThing) => {

        this.thing = thing;

      })
    );

    this.subscriptions.add(
      this.thingiverseService.getImages(this.id).subscribe((images: ThingiverseImage[]) => {

        this.images = images;

      })
    );

    this.subscriptions.add(
      this.thingiverseService.getFiles(this.id).subscribe((files: ThingiverseFile[]) => {

        this.files = files;

      })
    );

  }

  public getPrintSettings(settings: any) {

    return Object.keys(settings).map((key: string) => {

      return {
        name: key.replace(/_/ig, ''),
        value: settings[key]
      };

    });

  }

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();

  }
}
