import React, { useState } from "react";
import "../../base/storybook.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";
import Alert from "../Alert";
import {
  SvgIcCode,
  SvgIcChevronRightCircle,
  SvgIcClear,
  SvgIcError,
  SvgIcErrorColored,
  SvgIcShare,
  SvgIcGasPiped,
  SvgIcMagic,
  SvgIcPrimeContent,
} from "../../assets/svg-components";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    labelText: { control: "text" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    kind: {
      control: "select",
      options: ["normal", "service"],
    },
    state: {
      control: "select",
      options: ["info", "success", "warn", "error", "default", "disable"],
    },
    fill: {
      options: [true, false],
      control: { type: "radio" },
    },
    style: { control: "object" },
    className: { control: "text" },
    onClickHandler: { control: "object" },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <div className="main-div space-between">
    <Badge {...args} />
    <Badge {...args} icon={<SvgIcCode color="#000" />} />
    <Badge
      {...args}
      labelText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores vel expedita, praesentium quisquam quia optio nisi in alias laboriosam voluptate ratione error quibusdam inventore. Perspiciatis labore nemo quidem facere."
    />
  </div>
);
export const Badge_demo = Template.bind({});

Badge_demo.args = {
  size: "medium",
  kind: "normal",
  state: "success",
  fill: true,
  labelText: "Success",
};

export const badge_with_alert_strip = (args: any) => {
  const [inlineStrip, setInlineStrip] = useState(false);

  const inlineStripOpenHandler = () => {
    setInlineStrip(true);
  };
  const inlineStripcloseHandler = () => {
    setInlineStrip(false);
  };
  return (
    <div
      className="main-div space-between nitrozen-badge-story-table"
      style={{ width: "80%", margin: "auto" }}
    >
      <div className="nitrozen-badge-story-table-row-header">
        <span>Location</span>
        <span>city & pincode</span>
        <span>Location Code</span>
        <span>Location Type</span>
        <span style={{ justifySelf: "flex-end" }}>status</span>
      </div>
      <div className="nitrozen-badge-story-table-row">
        <span>Leela Ram</span>
        <span>PUNE - 411415</span>
        <span>987ABC45DBCAD</span>
        <span onClick={inlineStripOpenHandler}>Warehouse </span>
        <span
          onClick={inlineStripOpenHandler}
          style={{ justifySelf: "flex-end" }}
        >
          <Badge labelText="UNVERIFIED" state="error" {...args} />
        </span>
      </div>

      {inlineStrip && (
        <Alert
          labelText="Your account is still not verified"
          state="error"
          onClick={inlineStripcloseHandler}
        >
          close
        </Alert>
      )}

      <div className="nitrozen-badge-story-table-row">
        <span>Sitaa Ram </span>
        <span>KOCHI - 605001</span>
        <span>987ABC45DACED</span>
        <span>Warehouse </span>
        <span style={{ justifySelf: "flex-end" }}>
          <Badge {...args} />
        </span>
      </div>
    </div>
  );
};

export const text_badges = (args: any) => {
  return (
    <div className="main-div space-between">
      <div className="nitrozen-badge-collection">
        <div className="nitrozen-badge-story-collection">
          <span className="nitrozen-badge-story-row">
            <Badge labelText="CORRECTION" state="error" {...args} />
            <Badge
              labelText={<SvgIcPrimeContent color="#CD0909" />}
              state="error"
              {...args}
            />
          </span>
          <Badge labelText="VERIFIED" {...args} />
          <span className="nitrozen-badge-story-row">
            <Badge labelText="UNVERIFIED" state="warn" {...args} />
            <Badge
              labelText={<SvgIcPrimeContent color="#F5A300" />}
              state="warn"
              {...args}
            />
          </span>
          <span className="nitrozen-badge-story-row">
            <Badge labelText="PENDING" state="warn" {...args} />
            <Badge
              labelText={<SvgIcPrimeContent color="#F5A300" />}
              state="warn"
              {...args}
            />
          </span>
          <Badge labelText="SUPPRESSED" state="disable" {...args} />
          <Badge labelText="INCOMPLETE" state="disable" {...args} />
          {/*  Row 2 */}
          <span className="nitrozen-badge-story-row">
            <Badge labelText="CORRECTION" state="error" {...args} />
            <Badge
              labelText={<SvgIcClear color="#CD0909" />}
              state="error"
              {...args}
            />
          </span>
          <span></span>
          <span className="nitrozen-badge-story-row">
            <Badge labelText="UNVERIFIED" state="warn" {...args} />
            <Badge
              labelText={<SvgIcClear color="#F5A300" />}
              state="warn"
              {...args}
            />
          </span>
          <span className="nitrozen-badge-story-row">
            <Badge labelText="PENDING" state="warn" {...args} />
            <Badge
              labelText={<SvgIcClear color="#F5A300" />}
              state="warn"
              {...args}
            />
          </span>
          <span className="nitrozen-badge-story-row">
            <Badge labelText="DEFAULT" state="default" {...args} />
            <Badge labelText="" style={{ border: "none" }} {...args} />
          </span>
          <span className="nitrozen-badge-story-row">
            <Badge labelText="EXPIRED" state="disable" {...args} />
            <Badge labelText="" style={{ border: "none" }} {...args} />
          </span>
          {/* Row 3 */}

          <Badge labelText="CORRECTION" state="error" {...args} />
          <span></span>
          <span className="nitrozen-badge-story-row">
            <Badge labelText="UNVERIFIED" state="warn" {...args} />
            <Badge labelText="" style={{ border: "none" }} {...args} />
          </span>
          <span className="nitrozen-badge-story-row">
            <Badge labelText="PENDING" state="warn" {...args} />
            <Badge labelText="" style={{ border: "none" }} {...args} />
          </span>
        </div>
      </div>
    </div>
  );
};

export const icon_badges = (args: any) => {
  return (
    <div className="main-div space-between">
      <div className="nitrozen-badge-collection">
        <span className="nitrozen-badge-story-row" style={{ gap: "1.6rem" }}>
          <Badge
            labelText={<SvgIcGasPiped size={19} color="#0A5F23" />}
            style={{ padding: "4px", width: "20px", height: "20px" }}
            {...args}
          />
          <Badge
            labelText={<SvgIcMagic size={19} color="#EB5757" />}
            style={{ padding: "4px", width: "20px", height: "20px" }}
            state="error"
            {...args}
          />
          <Badge
            labelText={<SvgIcMagic size={19} color="#F5A300" />}
            style={{ padding: "4px", width: "20px", height: "20px" }}
            state="warn"
            {...args}
          />
          <Badge
            labelText={<SvgIcShare size={19} />}
            style={{ padding: "4px", width: "20px", height: "20px" }}
            state="disable"
            {...args}
          />
        </span>
      </div>
      {/*  */}
      <div className="nitrozen-badge-collection">
        <div className="nitrozen-badge-story-icon-collection">
          <Badge
            labelText={<SvgIcMagic size={24} color="#F5A300" />}
            state="warn"
            style={{
              backgroundColor: "#FFF7E0",
              borderRadius: "50px",
              border: "none",
              padding: "8px",
              width: "32px",
              height: "32px",
            }}
            {...args}
          />
          <Badge
            labelText={<SvgIcGasPiped size={24} color="#0A5F23" />}
            style={{
              backgroundColor: "#E3F2E9",
              borderRadius: "50px",
              border: "none",
              padding: "8px",
              width: "32px",
              height: "32px",
            }}
            {...args}
          />
          <Badge
            labelText={<SvgIcMagic size={24} color="#EB5757" />}
            style={{
              backgroundColor: "#FDEDED",
              borderRadius: "50px",
              border: "none",
              padding: "8px",
              width: "32px",
              height: "32px",
            }}
            state="error"
            {...args}
          />
          <Badge
            labelText={<SvgIcShare size={24} />}
            style={{
              backgroundColor: "#F2F2F2",
              borderRadius: "50px",
              border: "none",
              padding: "8px",
              width: "32px",
              height: "32px",
            }}
            state="disable"
            {...args}
          />

          <Badge
            labelText={<SvgIcMagic size={32} color="#F5A300" />}
            state="warn"
            style={{ border: "none" }}
            {...args}
          />
          <Badge
            labelText={<SvgIcGasPiped size={32} color="#0A5F23" />}
            style={{ border: "none" }}
            {...args}
          />
          <Badge
            labelText={<SvgIcMagic size={32} color="#EB5757" />}
            style={{ border: "none" }}
            state="error"
            {...args}
          />
          <Badge
            labelText={<SvgIcShare size={32} />}
            style={{ border: "none" }}
            state="disable"
            {...args}
          />

          <Badge
            labelText={<SvgIcMagic size={19} color="#F5A300" />}
            state="warn"
            style={{ border: "none" }}
            {...args}
          />
          <Badge
            labelText={<SvgIcGasPiped size={19} color="#0A5F23" />}
            style={{ border: "none" }}
            {...args}
          />
          <Badge
            labelText={<SvgIcMagic size={19} color="#EB5757" />}
            state="error"
            style={{ border: "none" }}
            {...args}
          />
          <Badge
            labelText={<SvgIcShare size={19} />}
            style={{ border: "none" }}
            state="disable"
            {...args}
          />
        </div>
      </div>
      <div className="nitrozen-badge-collection">
        <div className="nitrozen-badge-story-icon-collection">
          <Badge
            labelText={<SvgIcError size={32} color="#CD0909" />}
            state="error"
            style={{ borderRadius: "50px", border: "none", padding: "8px" }}
            {...args}
          />
          <Badge
            labelText={<SvgIcError size={32} color="#F5A300" />}
            state="warn"
            style={{ borderRadius: "50px", border: "none", padding: "8px" }}
            {...args}
          />
          <Badge
            labelText={
              <SvgIcCode
                size={26}
                color={"white"}
                style={{
                  backgroundColor: "#0A5F23",
                  borderRadius: "100%",
                }}
              />
            }
            style={{ border: "none", marginTop: "7px" }}
            {...args}
          />

          <Badge
            labelText={
              <SvgIcError
                size={32}
                color="#2E31BE
            "
              />
            }
            state="info"
            style={{ borderRadius: "50px", border: "none", padding: "8px" }}
            {...args}
          />
          {/*  */}

          <Badge
            labelText={
              <SvgIcErrorColored
                size={32}
                color={"#CD0909"}
                style={{
                  borderRadius: "100%",
                  padding: "5px",
                }}
              />
            }
            state="error"
            style={{ borderRadius: "50px", border: "none", padding: "8px" }}
            {...args}
          />
          <Badge
            state="warn"
            labelText={
              <SvgIcErrorColored
                size={32}
                color={"#F5A300"}
                style={{
                  borderRadius: "100%",
                  padding: "5px",
                }}
              />
            }
            style={{ borderRadius: "50px", border: "none", padding: "8px" }}
            {...args}
          />
          <Badge
            labelText={<SvgIcChevronRightCircle size={32} color={"#0A5F23"} />}
            style={{ border: "none", marginTop: "7px" }}
            {...args}
          />

          <Badge
            labelText={
              <SvgIcErrorColored
                size={32}
                color={"#2E31BE"}
                style={{
                  borderRadius: "100%",
                  padding: "5px",
                }}
              />
            }
            state="info"
            style={{ borderRadius: "50px", border: "none", padding: "8px" }}
            {...args}
          />
        </div>
      </div>
    </div>
  );
};
