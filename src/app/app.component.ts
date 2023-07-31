import { Component } from "@angular/core";
import { DiagnosisService } from "./diagnosis.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "CodeSandbox";
  diagnosisList = [];
  keyword = "";

  constructor(private diagnosisService: DiagnosisService) {}

  getDiagnosis() {
    this.diagnosisService
      .getDiagnosisByKeyword(this.keyword)
      .subscribe((data) => (this.diagnosisList = data));
  }
}
