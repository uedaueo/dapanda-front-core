import {
    defineSnackbarStoreActions
} from "%/stores/SnackbarStore/DefineSnackbarStoreActions";
import {SnackbarAttribute} from "%/components/snackbar/SnackbarAttribute";
import { v4 as uuidv4 } from "uuid";
import {DapandaConst} from "@/common/DapandaGlobals";

export const snackbarStoreActions = defineSnackbarStoreActions(
    {
        async flushSnackbar() {
            for (let i = 0; i < this.snackbarAttributes.length; i++) {
                this.snackbarAttributes.pop();
            }
            this.status = DapandaConst.SnackbarStatusInvalid;
        },
        hideSnackbar(obj: SnackbarAttribute): void {
            const id = obj.id;
            this.snackbarAttributes.forEach((v, index) => {
                if (v.id === id) {
                    this.snackbarAttributes.splice(index, 1);
                }
            });
            this.status = DapandaConst.SnackbarStatusInvalid;
        },
        showSnackbar(obj: SnackbarAttribute): void {
            obj.id = uuidv4();
            this.snackbarAttributes.push(obj);
            this.status = DapandaConst.SnackbarStatusInvalid;
        },
        async setStatus(status: string) {
            this.status = status;
        }
    }
);
