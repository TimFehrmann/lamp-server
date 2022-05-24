import { TestFunction } from '../../src';

describe('TestClass - TestFunction', () => {

    // Mock

    // Reset
    beforeEach(async () => {
    });

    test('TimeoutHandler - StartTimeoutAndGetToken: No Error', async () => {
        // Mock
        const res: string = 'Test';

        // To Test
        const val = TestFunction();

        // Expect
        expect(val).toMatch(res);
    });

});