import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { AnimalDialogData } from "../models/animal-dialog-data";
import { Animal } from "../models/animal";
import { TypeService } from "../services/type.service";
import { Observable } from "rxjs";
import { BreedService } from "../services/breed.service";
import { BreedAnimal } from "../models/breed-animal";
import { TypeAnimal } from "../models/type-animal";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Human } from "../models/human";
import { HumanService } from "../services/human.service";
import { MatCheckboxModule } from "@angular/material/checkbox";

@Component({
  selector: 'app-animal-create',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
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
  humanExists = new FormControl(false);
  humanName=new FormControl();
  humanPhone = new FormControl();
  humanEmail = new FormControl();

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: string,
    private matDialogRef: MatDialogRef<AnimalCreateComponent, AnimalDialogData>,
    private formBuilder: FormBuilder,
    private typeService: TypeService,
    private breedService: BreedService,
    private humanService: HumanService
  ) {

    this.createForm = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required]],
      breed: [''],
      type: ['', [Validators.required]],
      birthDate: [null],
      comment: ['', [Validators.min(this.commentMinLength), Validators.max(this.commentMaxLength)]],
      human:[],
      humanEmail:[],
      humanName:[],
      humanPhone:[]

    });

  }

  ngOnInit(): void {
    this.typeAnimal$ = this.typeService.getAllTypes();
    this.breedAnimal$ = this.breedService.getAllTypesByTypeAnimal();
    this.human$ = this.humanService.getAllHumans();
  }

  submit(): void {
    if (this.createForm.valid) {
      const data: Animal = { ...this.createForm.value };

      this.matDialogRef.close(data);
    }
  }

  protected readonly Boolean = Boolean;
}
