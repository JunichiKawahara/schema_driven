exports.mocks = {
    ID: () => 1,
    Post: () => ({
        title: 'こんにちは',
        content: '今日は良い天気ですね',
        posted_at: '2018-12-01T00:00:00Z',
    }),
    Comment: () => ({
        content: 'そうですね',
        posted_at: '2018-12-01T00:00:00:00Z',
    }),
};
