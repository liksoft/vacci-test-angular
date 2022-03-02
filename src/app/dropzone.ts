import { TranslateService } from "@ngx-translate/core";
import { map } from "rxjs/operators";

export const DropzoneDictLoader = async (translate: TranslateService) => {
  return await translate
    .get(
      [
        "dictAcceptedFilesLabel",
        "dictFallbackMessageLabel",
        "dictFileTooBigLabel",
        "dictInvalidFileTypeLabel",
        "dictCancelUploadLabel",
        "dictResponseErrorLabel",
        "dictCancelUploadConfirmationLabel",
        "dictRemoveFileConfirmationLabel",
        "dictRemoveFileLabel",
        "dictMaxFilesExceededLabel",
        "dictUploadCanceled",
      ],
      {
        maxFilesize: "{{maxFilesize}}",
        filesize: "{{filesize}}",
      }
    )
    .pipe(
      map((translations) => ({
        dictFallbackMessage: translations?.dictFallbackMessageLabel,
        dictFileTooBig: translations?.dictFileTooBigLabel,
        dictInvalidFileType: translations?.dictInvalidFileTypeLabel,
        dictResponseError: translations?.dictResponseErrorLabel,
        dictCancelUpload: translations?.dictCancelUploadLabel,
        dictCancelUploadConfirmation:
          translations?.dictCancelUploadConfirmationLabel,
        dictRemoveFile: translations?.dictRemoveFileLabel,
        dictRemoveFileConfirmation:
          translations?.dictRemoveFileConfirmationLabel,
        dictMaxFilesExceeded: translations?.dictMaxFilesExceededLabel,
        dictUploadCanceled: translations?.dictUploadCanceled,
        dictAcceptedFiles: translations?.dictAcceptedFilesLabel,
      }))
    )
    .toPromise();
};
