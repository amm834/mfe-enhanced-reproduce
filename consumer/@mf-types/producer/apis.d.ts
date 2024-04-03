
    export type RemoteKeys = 'producer/button';
    type PackageType<T> = T extends 'producer/button' ? typeof import('producer/button') :any;