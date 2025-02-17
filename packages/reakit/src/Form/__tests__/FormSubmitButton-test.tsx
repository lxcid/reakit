import * as React from "react";
import { render } from "@testing-library/react";
import { unstable_FormSubmitButton as FormSubmitButton } from "../FormSubmitButton";

test("render", () => {
  const { baseElement } = render(
    <FormSubmitButton baseId="base" submit={jest.fn()} />
  );
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <button
          tabindex="0"
          type="submit"
        />
      </div>
    </body>
  `);
});
