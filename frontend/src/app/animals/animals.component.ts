import { Component, ViewChild } from '@angular/core';
import { Animal } from "../models/animal";
import { AnimalService } from "../services/animal.service";
import { MatTable, MatTableModule } from '@angular/material/table';
import { ANIMALS } from "../mock-animals";
import { MatButtonModule } from "@angular/material/button";
import { AnimalDialogData } from "../models/animal-dialog-data";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AnimalCreateComponent } from "../animal-create/animal-create.component";
import { ToastrService } from "ngx-toastr";
import { error } from "@angular/compiler-cli/src/transformers/util";
import { HttpErrorResponse } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule],
})
export class AnimalsComponent {
  displayedColumns: string[] = ['id', 'type', 'breed', 'name'];
  animals: Animal[] = [];
  dataSource = [...ANIMALS]
  @ViewChild(MatTable) table: MatTable<Animal>;

  constructor(private animalService: AnimalService,
              public matDialog: MatDialog,
              private toastrService:ToastrService) {
    this.table = {} as MatTable<Animal>;
  }

  ngOnInit(): void {
    this.getAllAnimals();

  }

  getAllAnimals(): void {
    this.animalService.getAllAnimals()
      .subscribe(animals => {
        this.animals = animals
      })
  }

  openCreateAnimalDialog(): void {
    const dialogRef: MatDialogRef<AnimalCreateComponent, AnimalDialogData> = this.matDialog.open(
      AnimalCreateComponent,
      {
        backdropClass: 'dialog-background',
        hasBackdrop: true,
        disableClose: true
      }
    );

    dialogRef.afterClosed().subscribe((createDialogData: AnimalDialogData | undefined) => {
      if (createDialogData) {
        this.createAnimal(createDialogData);
      }
    });
  }

  private createAnimal(animalDialogData: AnimalDialogData) {
    this.animalService.saveAnimal(animalDialogData).subscribe({
      next: () => {
        this.toastrService.success(`${animalDialogData.name} is created`)
      },
      error: (error:HttpErrorResponse) => {
        this.toastrService.error(error.message)
      }
    })
  }
}
