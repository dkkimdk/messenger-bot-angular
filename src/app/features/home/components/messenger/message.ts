export class Message {
    constructor(
        public utterance: string,
        public date: Date,
        public userInitiated: boolean,
        public timeToDelay?: string,
        public id?: number,
        public phoneNumber?: string
    ){}
}
