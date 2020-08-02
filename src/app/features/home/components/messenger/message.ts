export class Message {
    constructor(
        public utterance: string,
        public date: Date,
        public userInitiated: boolean,
        public id?: number,
        public timeToDelay?: {
            minOrHour: boolean;
            time: number;
        },
        public phoneNumber?: string
    ){}
}
