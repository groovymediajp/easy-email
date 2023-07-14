import { BasicType, AdvancedType } from '@groovymedia/easy-email-core';

export function isTextBlock(blockType: any) {
  return blockType === BasicType.TEXT || blockType === AdvancedType.TEXT;
}