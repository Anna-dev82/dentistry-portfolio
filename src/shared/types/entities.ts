/**
 * @description Core entities for the Dentistry Portfolio
 */

export interface IService {
    id: string;
    title: string;
    description: string;
    imagePath: string;
}

export interface IDoctor {
    id: string;
    name: string;
    role: string;
    experience: string;
    specialization: string;
    bio: string;
    photoUrl: string;
}

export interface IBeforeAfter {
    id: string;
    beforeImage: string;
    afterImage: string;
    title: string;
}

export interface IStat {
    label: string;
    value: string;
}