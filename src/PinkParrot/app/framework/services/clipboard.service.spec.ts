/*
 *PinkParrot CMS
 * 
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved
 */

import { ClipboardService, ClipboardServiceFactory } from './../';

describe('ShortcutService', () => {

    it('should instantiate from factory', () => {
        const clipboardService = ClipboardServiceFactory();

        expect(clipboardService).toBeDefined();
    });

    it('should instantiate', () => {
        const clipboardService = new ClipboardService();

        expect(clipboardService).toBeDefined();
    });

    it('should return empty string if clipboard is empty', () => {
        const clipboardService = new ClipboardService();

        expect(clipboardService.selectText()).toBe('');
    });

    it('should get value from clipboard', () => {
        const clipboardService = new ClipboardService();

        clipboardService.setText('MyContent');

        expect(clipboardService.selectText()).toBe('MyContent');
    });

    it('should raise subject when setting text', () => {
        const clipboardService = new ClipboardService();

        let text = '';

        clipboardService.text.subscribe(t => {
            text = t;
        });

        clipboardService.setText('MyContent');

        expect(text).toBe('MyContent');
    });
});