import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'jhi-register',
    templateUrl: './social-register.component.html'
})
export class SocialRegisterComponent implements OnInit {
    success: boolean;
    error: boolean;
    provider: string;
    providerLabel: string;
    modalRef: NgbModalRef;

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe((queryParams) => {
            this.success = queryParams['success'];
        });
        this.route.params.subscribe((params) => {
            this.provider = params['provider?{success:boolean}'];
        });
        this.error = !this.success;
        this.providerLabel = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
    }

    login() {
        // this.modalRef = this.loginModalService.open();
        this.router.navigate(['/login']);
    }
}
