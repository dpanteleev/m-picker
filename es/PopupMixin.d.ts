/// <reference types="react" />
import React from 'react';
import { IPopupPickerProps } from './PopupPickerTypes';
export default function PopupMixin(getModal: any, platformProps: any): {
    new (props: any): {
        picker: any;
        componentWillReceiveProps(nextProps: any): void;
        onPickerChange: (pickerValue: any) => void;
        saveRef: (picker: any) => void;
        setVisibleState(visible: any): void;
        fireVisibleChange(visible: any): void;
        getRender(): any;
        onTriggerClick: (e: any) => void;
        onOk: () => void;
        getContent: () => string | React.ReactElement<any> | undefined;
        onDismiss: () => void;
        hide: () => void;
        render(): any;
        setState<K extends string>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<IPopupPickerProps>;
        state: Readonly<any>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    defaultProps: any;
};
