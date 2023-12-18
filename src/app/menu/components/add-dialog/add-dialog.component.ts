import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { take } from "rxjs/internal/operators/take";
import { Category } from "src/app/shared/classes/Category";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: "add-dialog",
    templateUrl: "./add-dialog.component.html",
    styleUrls: ["./add-dialog.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
})
export class AddDialogComponent implements OnInit {
    protected reactiveForm!: FormGroup;

    constructor(private dataService: DataService,
        private ref: MatDialogRef<AddDialogComponent>) {}

    ngOnInit(): void {
        this.reactiveForm = new FormGroup({
            categoryInput: new FormControl("Sea", [Validators.required, Validators.minLength(3)])
        }, {updateOn: 'change'} );
    }

    onSubmit() {
        if (this.reactiveForm.valid) {
            const categoryInput = this.reactiveForm.value.categoryInput;
            this.dataService
                .addCategory(
                    new Category(Math.random().toString(), categoryInput) // TODO: Refactor this
                ) 
                .pipe(take(1))
                .subscribe();
            this.ref.close();    
        }
    }
}
