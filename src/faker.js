import faker from 'faker'

export function messageGenerator(count = 1) {
    const message = [];

    do {
        messages.push({
            id: faker.random.uuid(),
            type: faker.random.boolean() ? 'recieve' : 'sent',
            message: faker.lorem.sentence(),
            time: faker.date.recent().toLocalTimeString()
        })
        count--;
    } while (count)

    return messages;
}