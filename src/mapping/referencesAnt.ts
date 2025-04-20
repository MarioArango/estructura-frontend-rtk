import { Button, DatePicker, GetRef, Input, Mentions, Select } from 'antd';
/**
 * ----------------
 * NODE REFERENCES
 * ----------------
 */

export type TSelectRef = GetRef<typeof Select> | null;
export type TInputNumberRef = HTMLInputElement | null;
export type TInputRef = GetRef<typeof Input> | null;
export type TMentionsRef = GetRef<typeof Mentions> | null;
export type TTextAreaRef = GetRef<typeof Input.TextArea> | null;
export type TDatePickerRef = GetRef<typeof DatePicker> | null;
export type TButtonRef = GetRef<typeof Button> | null;
