/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PhotoshootCreateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    status?: number;
};
export declare type PhotoshootCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    status?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhotoshootCreateFormOverridesProps = {
    PhotoshootCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PhotoshootCreateFormProps = React.PropsWithChildren<{
    overrides?: PhotoshootCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PhotoshootCreateFormInputValues) => PhotoshootCreateFormInputValues;
    onSuccess?: (fields: PhotoshootCreateFormInputValues) => void;
    onError?: (fields: PhotoshootCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhotoshootCreateFormInputValues) => PhotoshootCreateFormInputValues;
    onValidate?: PhotoshootCreateFormValidationValues;
} & React.CSSProperties>;
export default function PhotoshootCreateForm(props: PhotoshootCreateFormProps): React.ReactElement;
