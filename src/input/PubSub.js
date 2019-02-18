import { foreach, indexOf } from '../library';

export default class PubSub {
	constructor() {
		this.topics = {};
	}

	publish(topic, data) {
		foreach(this.topics[topic], (callback) => {
			callback(data);
		});
	}

	subscribe(topic, callback) {
		this.topics[topic] = this.topics[topic] || [];
		this.topics[topic].push(callback);
	}

	unsubscribe(callback) {
		foreach(this.topics, (subscribers) => {
			const index = indexOf(subscribers, callback);
			if (index !== -1) {
				subscribers.splice(index, 1);
			}
		});
	}
}
