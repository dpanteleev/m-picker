/// <reference types="react" />
import React from 'react';
declare const _default: {
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
        }> & Readonly<{
            picker?: any;
            value?: any;
            triggerType?: string | undefined;
            WrapComponent?: any;
            dismissText?: string | React.ReactElement<any> | undefined;
            okText?: string | React.ReactElement<any> | undefined;
            title?: string | React.ReactElement<any> | undefined;
            visible?: boolean | undefined;
            disabled?: boolean | undefined;
            onOk?: ((value?: any) => void) | undefined;
            style?: any;
            onVisibleChange?: ((visible: boolean) => void) | undefined;
            content?: string | React.ReactElement<any> | undefined;
            onDismiss?: (() => void) | undefined;
            styles?: any;
            actionTextUnderlayColor?: string | undefined;
            actionTextActiveOpacity?: number | undefined;
            wrapStyle?: React.CSSProperties | undefined;
            prefixCls?: string | undefined;
            className?: string | undefined;
            pickerValueProp?: string | undefined;
            pickerValueChangeProp?: string | undefined;
            transitionName?: string | undefined;
            popupTransitionName?: string | undefined;
            maskTransitionName?: string | undefined;
        }>;
        state: Readonly<any>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    defaultProps: any;
};
export default _default;
