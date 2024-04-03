
    export type RemoteKeys = 'producer/button' | 'producer/card';
    type PackageType<T> = T extends 'producer/card' ? typeof import('producer/card') :T extends 'producer/button' ? typeof import('producer/button') :any;