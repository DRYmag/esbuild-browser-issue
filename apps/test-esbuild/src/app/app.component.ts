import { Component } from '@angular/core';
import { HubConnectionBuilder } from '@microsoft/signalr';

@Component({
  standalone: true,
  selector: 'test-esbuild-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private neverCalledButTriggerBuildError(): void {
    new HubConnectionBuilder().withUrl('').build();
  }
}
