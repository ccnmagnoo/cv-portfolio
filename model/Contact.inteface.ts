/**
 * @interface Contact
 * @param contact contact identificator
 * @param address string with link asociated
 * @param icon url with image
 * @param variant email social phone,
 */
export interface Contact {
  contact: string;
  address: string;
  icon?: string;
  variant: 'social' | 'phone' | 'email' | 'code';
}
