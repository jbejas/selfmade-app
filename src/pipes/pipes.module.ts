import { NgModule } from '@angular/core';
import { CountdownPipe } from './chars';

@NgModule({
	declarations: [
		CountdownPipe
	],
	imports: [],
	exports: [
		CountdownPipe
	]
})
export class PipesModule {}
