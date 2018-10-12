import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from "ionic-angular";


@Injectable()
export class Helpers {

    public loading: any;

    constructor(
        private alertCtrl: AlertController,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController
    ) {

    }

    public presentToast(text){
        let toast = this.toastCtrl.create({
            message: text,
            duration: 2500,
            position: 'top'
        });
        toast.present();
    }

    public showAlert(title,subtitle,message,buttons) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: title,
            message: message,
            buttons: buttons
        });
        alert.present();
    }

    public showLoading(message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    }

    public hideLoading() {
        this.loading.dismiss();
    }

}
