interface Animal {
    id: number;
    name: string;
    description: string;
    species: string;
    breeds: {
        primary: string;
        secondary: string;
        mixed: boolean;
        unknown: boolean;
    };
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    age: string;
    photos: {
        small: string;
        medium: string;
        large: string;
        full: string;
    }[];
    videos: {
        embed: string;
    }[];
    status: string;
    attributes: {
        spayed_neutered: boolean;
        house_trained: boolean;
        declawed: boolean;
        special_needs: boolean;
        shots_current: boolean;
    };
    environment: {
        children: boolean;
        dogs: boolean;
        cats: boolean;
    };
    tags: string[];
    contact: {
        email: string;
        phone: string;
        address: {
            address1: string;
            address2: string;
            city: string;
            state: string;
            postcode: string;
            country: string;
        };
    };
    published_at: string;
    distance: number;
    _links: {
        self: {
            href: string;
        };
        type: {
            href: string;
        };
        organization: {
            href: string;
        };
    };

}

export default Animal;