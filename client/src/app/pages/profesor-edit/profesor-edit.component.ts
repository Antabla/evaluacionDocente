/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d1e567d0e8b622e6162666b
*
* You will get 10% discount for each one of your friends
* 
*/
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
// Import Models
import { Profesor } from '../../domain/evaluacion-docente_db/profesor';

// START - USED SERVICES
/**
* profesorService.create
*	@description CRUD ACTION create
*
* profesorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* profesorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Profesor
 */
@Component({
    selector: 'app-profesor-edit',
    templateUrl: 'profesor-edit.component.html',
    styleUrls: ['profesor-edit.component.css']
})
export class ProfesorEditComponent implements OnInit {
    item: Profesor;
    model: Profesor;
    formValid: Boolean;

    constructor(
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Profesor();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.profesorService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Profesor
     *
     * @param {boolean} formValid Form validity check
     * @param Profesor item Profesor to save
     */
    save(formValid: boolean, item: Profesor): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.profesorService.update(item).subscribe(data => this.goBack());
            } else {
                this.profesorService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



