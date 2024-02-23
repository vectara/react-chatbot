export const getTrackingProps = (track?: boolean) => {
  if (track) {
    return {
      // Protect against tabnabbing.
      rel: "noopener",
      // Provide information for tracking, e.g. to docs. Technically this should be
      // 'referrerpolicy' but React wants it in camel case. This clashes with
      // react-router Link's HTMLAttributeReferrerPolicy type definition so we
      // have to use @ts-expect-error at callsites that consume this helper.
      referrerPolicy: "no-referrer-when-downgrade"
    };
  }
  // Protect against tabnabbing and strip information from the referrer header.
  return {
    rel: "noopener"
    // Default referrer policy is set by a meta tag in index.html.
  };
};
