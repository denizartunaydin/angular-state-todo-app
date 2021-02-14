import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    DialogModule,
  ],
  providers: [],
})
export class PrimeModule {}
