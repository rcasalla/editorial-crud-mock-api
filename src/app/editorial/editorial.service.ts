import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Editorial } from "./editorial";
import { EditorialDetail } from "./editorial-detail";
import { Observable } from "rxjs";

/**
 * The service provider for everything related to editorials
 */
@Injectable()
export class EditorialService {
  private editorialsUrl = "api/editorials"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) {}

  getEditorials(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.editorialsUrl);
  }

  /**
   * Returns the Observable object containing the editorial retrieved from the API
   * @returns The editorial
   */
  getEditorialDetail(editorialId): Observable<EditorialDetail> {
    const url = `${this.editorialsUrl}/${editorialId}`;
    return this.http.get<EditorialDetail>(url);
  }
}
