export interface RejectionReason {
  preset?:
    | "forbidden_item"
    | "wrong_category"
    | "bad_description"
    | "bad_photos"
    | "fraud"
    | "other";

  customReason?: string;
}
