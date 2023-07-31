import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DiagnosisService {
  constructor(private http: HttpClient) {}

  getDiagnosisByKeyword(keyword: string): Observable<any> {
    return this.http.get("assets/source.json").pipe(
      map((diagnosis: any[]) => {
        const filteredArray = diagnosis.filter(
          (d) =>
            d.name.includes(keyword) ||
            d.text.includes(keyword) ||
            d.laytext.includes(keyword)
        );
        return filteredArray;
      })
    );
  }
}
