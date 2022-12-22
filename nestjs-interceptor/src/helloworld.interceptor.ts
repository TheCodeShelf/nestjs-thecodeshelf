import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable()
export class HelloWorldInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // This console.log() will work before entering the contoller
    console.log("Before entering the contoller")
    
    return next.handle().pipe( tap(() => 
        // This console.log() will run after the code executes logic from contoller
        console.log(`Hello World!`)
    ));
}
}