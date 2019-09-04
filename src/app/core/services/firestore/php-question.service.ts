import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {IConfig, IQuestion} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PhpQuestionService {
  public quizCollection: AngularFirestoreCollection<IQuestion>;
  private quizDoc: AngularFirestoreDocument<IQuestion>;
  private phpConfigDoc: AngularFirestoreDocument<IConfig>;

  constructor(
    private db: AngularFirestore,
  ) {
    this.quizCollection = db.collection<IQuestion>(environment.phpPath);
  }

  getConfig(id: string): Observable<any> {
    this.phpConfigDoc = this.db.doc<IConfig>(`${environment.configPath}/${id}`);
    return this.phpConfigDoc.get();
  }

  getQuestion(id: string): Observable<any> {
    this.quizDoc = this.db.doc<IQuestion>(`${environment.phpPath}/${id}`);
    return this.quizDoc.get();
  }

  addQuestion(question: IQuestion): Observable<any> {
    return new Observable((observer) => {
      const configDocRef = this.db.firestore.collection(environment.configPath).doc('php');
      this.db.firestore.runTransaction(transaction =>
        transaction.get(configDocRef).then(configDoc => {
          const counter = (configDoc.data().counter || 0) + 1;
          transaction.update(configDocRef, {counter});
          return counter;
        }))
        .then(counter => {
          question.id = counter;
          this.quizCollection.doc(String(question.id)).set(question).then(() => {
            // update config
            observer.next(question.id);
          }).catch((err) => {
            observer.error(err);
          });
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }

  updateQuestion(question: IQuestion): Observable<any> {
    return new Observable((observer) => {
      this.quizDoc = this.db.doc<IQuestion>(`${environment.phpPath}/${question.id}`);
      this.quizDoc.update(question)
        .then(() => {
          observer.next(question.id);
        })
        .catch(err => {
          observer.error(err);
        });
    });
  }

  deleteQuestion(id): Observable<any> {
    return new Observable((observer) => {
      this.quizDoc = this.db.doc<IQuestion>(`${environment.phpPath}/${id}`);
      this.quizDoc.delete().then(() => {
        observer.next(id);
      }).catch(err => {
        observer.error(err);
      });
    });
  }
}

