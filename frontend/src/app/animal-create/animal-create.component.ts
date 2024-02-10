import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AnimalData } from "../models/animal-data";
import { Animal } from "../models/animal";
import { TypeService } from "../services/type.service";
import { Observable, of } from "rxjs";
import { BreedService } from "../services/breed.service";
import { BreedAnimal } from "../models/breed-animal";
import { TypeAnimal } from "../models/type-animal";
import { Human } from "../models/human";
import { HumanService } from "../services/human.service";
import { HttpErrorResponse } from "@angular/common/http";
import { AnimalService } from "../services/animal.service";
import { ToastrService } from "ngx-toastr";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.scss']
})
export class AnimalCreateComponent implements OnInit {
  commentMinLength = 3;
  commentMaxLength = 200;

  createForm: FormGroup;

  typeAnimal$: Observable<TypeAnimal[]> | undefined;
  breedAnimal$: Observable<BreedAnimal[]> | undefined;
  human$: Observable<Human[]> | undefined;

  name!: string;
  birthDate?: Date;
  humanControl: Human | undefined;
  humanExists = new FormControl(true);
  typeExists = new FormControl(true);
  breedExists = new FormControl(true);
  humanName=new FormControl();
  humanPhone = new FormControl();
  humanEmail = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private typeService: TypeService,
    private breedService: BreedService,
    private humanService: HumanService,
    private animalService: AnimalService,
    private toastrService:ToastrService
  ) {

    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      breed: [''],
      type: [''],
      typeName:[],
      breedName:[],
      birthDate: [''],
      comment: ['', [Validators.min(this.commentMinLength), Validators.max(this.commentMaxLength)]],
      human:[],
      humanEmail:[],
      humanName:[],
      humanPhone:[],

    });

  }
  ngOnInit(): void {
   this.typeAnimal$ = this.typeService.getAllTypes();
   this.breedAnimal$ = this.breedService.getAllBreeds();
    this.human$ = this.humanService.getAllHumans();
    this.humanControl = this.createForm.get('human')?.value as Human;

  }

  submit(): void {
    if (this.createForm.valid) {

      const data: AnimalData = { ...this.createForm.value };
      // if(this.humanExists.value==false){
      //   this.humanName.setValue(this.humanName);
      //   this.humanPhone.setValue(this.humanPhone);
      //   this.humanEmail.setValue(this.humanEmail);
      //
      //   const human: Human = {
      //     name: this.humanName.value,
      //     phone: this.humanPhone.value,
      //     email: this.humanEmail.value
      //   }
      //   this.humanService.saveHuman(human).subscribe({
      //     next: () => this.toastrService.success(`Human is created`),
      //     error: (error:HttpErrorResponse) => this.toastrService.error(error.message)
      //   });
      // }
      // if(this.typeExists.value==false){
      //   const type: TypeAnimal = {
      //     type: this.createForm.get('typeName')?.value
      //   }
      //
      //   this.typeService.saveType(type).subscribe({
      //     next: () => this.toastrService.success(`Type is created`),
      //     error: (error: HttpErrorResponse) => this.toastrService.error(error.message)
      //   });
      // }
      // if(this.breedExists.value==false){
      //   const breed: BreedAnimal = {
      //     breed: this.createForm.get('breedName')?.value,
      //     type: this.createForm.get('type')?.value
      //
      //   }
      //   this.breedService.saveBreed(breed).subscribe({
      //     next: () => this.toastrService.success(`Breed is created`),
      //     error: (error:HttpErrorResponse) => this.toastrService.error(error.message)
      //   });
      // }

      this.createAnimal(data);
    }else {
      for (const controlName in this.createForm.controls) {
        if (this.createForm.controls.hasOwnProperty(controlName)) {
          const control = this.createForm.get(controlName);

          if (control?.errors) {
            for (const errorKey in control.errors) {
              if (control.errors.hasOwnProperty(errorKey)) {
                console.log(`Control: ${controlName}, Error: ${errorKey}`);
              }
            }
          }
        }
      }
    }

  }
  private createAnimal(animalData: AnimalData) {
    const animal: AnimalData = {
      name: animalData.name,
      breed: this.createForm.get('breed')?.value || this.createForm.get('breedName')?.value || null,
      type: this.createForm.get('type')?.value || this.createForm.get('typeName')?.value || null,
      ages: animalData.ages,
      comment: this.createForm.get('comment')?.value || null,
      birthDate: this.createForm.get('birthDate')?.value || null,
      human: animalData.human || {
        name: this.createForm.get('humanName')?.value || null,
        phone: this.createForm.get('humanPhone')?.value || null,
        email: this.createForm.get('humanEmail')?.value || null
      }
    };
    this.animalService.saveAnimal(animal).subscribe({
      next: () => this.toastrService.success(`${animalData.name} is created`),
      error: (error:HttpErrorResponse) => this.toastrService.error(error.message)
    })
  }

  protected readonly Boolean = Boolean;
}
