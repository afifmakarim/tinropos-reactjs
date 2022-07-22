import React from "react";
import { Button } from "react-bootstrap";

export default function CTA({ disabled }) {
  return (
    <Button variant="primary" className="text-white mt-2" disabled={disabled}>
      Continue
    </Button>
  );
}
