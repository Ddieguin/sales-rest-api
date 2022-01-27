declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: number;
        JWT_SECRET: string;
    }
}
