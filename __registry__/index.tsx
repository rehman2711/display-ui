// @ts-nocheck
import * as React from "react"
// Import all preview components
import PreviewAccordion from "@/content/Preview/PreviewAccordion"
import PreviewAlertDialog from "@/content/Preview/PreviewAlertDialog"
import PreviewAvatar from "@/content/Preview/PreviewAvatar"
import PreviewAvatarDefault from "@/content/Preview/PreviewAvatarDefault"
import PreviewAvatarGroup from "@/content/Preview/PreviewAvatarGroup"
import PreviewAvatarOverlap from "@/content/Preview/PreviewAvatarOverlap"
import PreviewBadge from "@/content/Preview/PreviewBadge"
import PreviewBadgeDanger from "@/content/Preview/PreviewBadgeDanger"
import PreviewBadgeDefault from "@/content/Preview/PreviewBadgeDefault"
import PreviewBadgeSuccess from "@/content/Preview/PreviewBadgeSuccess"
import PreviewBadgeWarning from "@/content/Preview/PreviewBadgeWarning"
import PreviewBreadcrumb from "@/content/Preview/PreviewBreadcrumb"
import PreviewBreadcrumbWithIcon from "@/content/Preview/PreviewBreadcrumbWithIcon"
import PreviewBreadcrumbWithoutIcon from "@/content/Preview/PreviewBreadcrumbWithoutIcon"
import PreviewButton from "@/content/Preview/PreviewButton"
import PreviewButtonDefault from "@/content/Preview/PreviewButtonDefault"
import PreviewButtonGhost from "@/content/Preview/PreviewButtonGhost"
import PreviewButtonLink from "@/content/Preview/PreviewButtonLink"
import PreviewButtonOutline from "@/content/Preview/PreviewButtonOutline"
import PreviewButtonRing from "@/content/Preview/PreviewButtonRing"
import PreviewButtonRingDanger from "@/content/Preview/PreviewButtonRingDanger"
import PreviewButtonRingDefault from "@/content/Preview/PreviewButtonRingDefault"
import PreviewButtonRingSolid from "@/content/Preview/PreviewButtonRingSolid"
import PreviewButtonRingSuccess from "@/content/Preview/PreviewButtonRingSuccess"
import PreviewCalendar from "@/content/Preview/PreviewCalendar"
import PreviewCalendarDefault from "@/content/Preview/PreviewCalendarDefault"
import PreviewCalendarPrimary from "@/content/Preview/PreviewCalendarPrimary"
import PreviewCalendarSuccess from "@/content/Preview/PreviewCalendarSuccess"
import PreviewCard from "@/content/Preview/PreviewCard"
import PreviewCheckBox from "@/content/Preview/PreviewCheckBox"
import PreviewDrawer from "@/content/Preview/PreviewDrawer"
import PreviewDropdownMenu from "@/content/Preview/PreviewDropdownMenu"
import PreviewInfiniteCarousel from "@/content/Preview/PreviewInfiniteCarousel"
import PreviewInputOTP from "@/content/Preview/PreviewInputOTP"
import PreviewLabel from "@/content/Preview/PreviewLabel"
import PreviewNavigationMenu from "@/content/Preview/PreviewNavigationMenu"
import PreviewNavigationMenuMac from "@/content/Preview/PreviewNavigationMenuMac"
import PreviewRadioGroups from "@/content/Preview/PreviewRadioGroups"
import PreviewSeparator from "@/content/Preview/PreviewSeparator"
import PreviewTable from "@/content/Preview/PreviewTable"
import PreviewToaster from "@/content/Preview/PreviewToaster"
import PreviewTooltip from "@/content/Preview/PreviewTooltip"
import PreviewCarousel from "@/content/Preview/PreviewCarousel"
import PreviewCarouselWithAutoplayIntervals from "@/content/Preview/PreviewCarouselWithAutoplayIntervals"
import PreviewCheckBoxDefault from "@/content/Preview/PreviewCheckBoxDefault"
import PreviewCheckBoxPrimary from "@/content/Preview/PreviewCheckBoxDark"
import PreviewCheckBoxSuccess from "@/content/Preview/PreviewCheckBoxSuccess"
import PreviewCheckBoxDanger from "@/content/Preview/PreviewCheckBoxDanger"
import PreviewCheckBoxDark from "@/content/Preview/PreviewCheckBoxDark"
import PreviewDrawerTop from "@/content/Preview/PreviewDrawerTop"
import PreviewDrawerBottom from "@/content/Preview/PreviewDrawerBottom"
import PreviewDrawerLeft from "@/content/Preview/PreviewDrawerLeft"
import PreviewDrawerRight from "@/content/Preview/PreviewDrawerRight"
import PreviewInfiniteCarouselWithPause from "@/content/Preview/PreviewInfiniteCarouselWithPause"
import PreviewInfiniteCarouselWithoutPause from "@/content/Preview/PreviewInfiniteCarouselWithoutPause"
import PreviewInput from "@/content/Preview/PreviewInput"
import PreviewInputText from "@/content/Preview/PreviewInputText"
import PreviewInputEmail from "@/content/Preview/PreviewInputEmail"
import PreviewInputPassword from "@/content/Preview/PreviewInputPassword"
import PreviewInputNumber from "@/content/Preview/PreviewInputNumber"
import PreviewInputOTPSixBoxes from "@/content/Preview/PreviewInputOTPSixBoxes"
import PreviewNavigationMenuMacWithTooltip from "@/content/Preview/PreviewNavigationMenuMacWithTooltip"
import PreviewRadioGroupDefault from "@/content/Preview/PreviewRadioGroupsDefault"
import PreviewRadioGroupWarning from "@/content/Preview/PreviewRadioGroupsWarning"
import PreviewRadioGroupSuccess from "@/content/Preview/PreviewRadioGroupsSuccess"
import PreviewRadioGroupDanger from "@/content/Preview/PreviewRadioGroupsDanger"
import PreviewSeparatorHorizontal from "@/content/Preview/PreviewSeparatorHorizontal"
import PreviewSeparatorVertical from "@/content/Preview/PreviewSeparatorVertical"
import PreviewToasterInfo from "@/content/Preview/PreviewToasterInfo"
import PreviewToasterWarning from "@/content/Preview/PreviewToasterWarning"
import PreviewToasterSuccess from "@/content/Preview/PreviewToasterSuccess"
import PreviewToasterError from "@/content/Preview/PreviewToasterError"
import PreviewTooltipDefault from "@/content/Preview/PreviewTooltipDefault"
import PreviewTooltipTop from "@/content/Preview/PreviewTooltipTop"
import PreviewTooltipBottom from "@/content/Preview/PreviewTooltipBottom"
import PreviewTooltipLeft from "@/content/Preview/PreviewTooltipLeft"
import PreviewTooltipRight from "@/content/Preview/PreviewTooltipRight"

export const Index: Record<string, any> = {
  default: {
    // 1_________________________________________________________________________________________________
    // This is used for component preview and source code tabs in start
    AccordionDemo: {
      name: "Accordion",
      type: "registry:example",
      registryDependencies: undefined, // give in array format if any dependency is there // dependency is other component which is used inside this component //  means local dependency which is component
      files: [
        {
          path: "content/Preview/PreviewAccordion.tsx",
          type: "registry:ui",
          target: "",
        },
      ], // this is source code file path
      component: PreviewAccordion, // this is preview component
      source: "",
      category: "",
      subcategory: "",
      chunks: [],
    },
    // This is used for component manual installation
    // So that removed the component key from below , because don,t want to show in component preview
    Accordion: {
      name: "Accordion",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/displayui/Accordion.tsx",
          type: "registry:ui",
        },
      ], // this is source code file path
    },

    // _2________________________________________________________________________________________________

    AlertDialogDemo: {
      name: "AlertDialog",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewAlertDialog.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewAlertDialog,
    },
    AlertDialog: {
      name: "AlertDialog",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/AlertDialog.tsx",
          type: "registry:example",
        },
      ],
    },

    // __3_______________________________________________________________________________________________

    AvatarDemo: {
      name: "Avatar",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewAvatar.tsx", type: "registry:example" },
      ],
      component: PreviewAvatar,
    },

    AvatarDefaultDemo: {
      name: "Avatar",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewAvatarDefault.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewAvatarDefault,
    },

    AvatarGroupDemo: {
      name: "Avatar",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewAvatarGroup.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewAvatarGroup,
    },

    AvatarOverlapDemo: {
      name: "Avatar",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewAvatarOverlap.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewAvatarOverlap,
    },

    Avatar: {
      name: "Avatar",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Avatar.tsx",
          type: "registry:example",
        },
      ],
    },

    // ___4______________________________________________________________________________________________

    BadgeDemo: {
      name: "Badge",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewBadge.tsx", type: "registry:example" },
      ],
      component: PreviewBadge,
    },

    BadgeDefaultDemo: {
      name: "Badge",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewBadgeDefault.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewBadgeDefault,
    },

    BadgeWarningDemo: {
      name: "Badge",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewBadgeWarning.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewBadgeWarning,
    },
    BadgeSuccessDemo: {
      name: "Badge",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewBadgeSuccess.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewBadgeSuccess,
    },

    BadgeDangerDemo: {
      name: "Badge",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewBadgeDanger.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewBadgeDanger,
    },

    Badge: {
      name: "Badge",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Badge.tsx",
          type: "registry:example",
        },
      ],
    },

    // _____5____________________________________________________________________________________________

    BreadcrumbDemo: {
      name: "Breadcrumb",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewBreadcrumb.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewBreadcrumb,
    },

    BreadcrumbDefaultDemo: {
      name: "Breadcrumb",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewBreadcrumbWithoutIcon.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewBreadcrumbWithoutIcon,
    },

    BreadcrumbWithIconDemo: {
      name: "Breadcrumb",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewBreadcrumbWithIcon.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewBreadcrumbWithIcon,
    },

    Breadcrumb: {
      name: "Breadcrumb",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Breadcrumb.tsx",
          type: "registry:example",
        },
      ],
    },

    // _6________________________________________________________________________________________________
    //  all components
    ButtonDemo: {
      name: "Button",
      type: "registry:component",
      files: [
        { path: "content/Preview/PreviewButton.tsx", type: "registry:ui" },
      ],
      component: PreviewButton,
    },

    //  variant of button
    ButtonDefaultDemo: {
      name: "ButtonDefault",
      type: "registry:component",
      files: [
        {
          path: "content/Preview/PreviewButtonDefault.tsx",
          type: "registry:ui",
        },
      ],
      component: PreviewButtonDefault,
    },
    ButtonOutlineDemo: {
      name: "Button",
      type: "registry:component",
      files: [
        {
          path: "content/Preview/PreviewButtonOutline.tsx",
          type: "registry:ui",
        },
      ],
      component: PreviewButtonOutline,
    },
    ButtonGhostDemo: {
      name: "Button",
      type: "registry:component",
      files: [
        { path: "content/Preview/PreviewButtonGhost.tsx", type: "registry:ui" },
      ],
      component: PreviewButtonGhost,
    },
    ButtonLinkDemo: {
      name: "Button",
      type: "registry:component",
      files: [
        { path: "content/Preview/PreviewButtonLink.tsx", type: "registry:ui" },
      ],
      component: PreviewButtonLink,
    },

    Button: {
      name: "Button",
      type: "registry:component",
      files: [
        { path: "registry/default/displayui/Button.tsx", type: "registry:ui" },
      ],
    },

    // __7_______________________________________________________________________________________________

    ButtonRingDemo: {
      name: "ButtonRing",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewButtonRing.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewButtonRing,
    },

    ButtonRingDefaultDemo: {
      name: "ButtonRing",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewButtonRingDefault.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewButtonRingDefault,
    },

    ButtonRingSolidDemo: {
      name: "ButtonRing",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewButtonRingSolid.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewButtonRingSolid,
    },

    ButtonRingSuccessDemo: {
      name: "ButtonRing",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewButtonRingSuccess.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewButtonRingSuccess,
    },

    ButtonRingDangerDemo: {
      name: "ButtonRing",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewButtonRingDanger.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewButtonRingDanger,
    },

    ButtonRing: {
      name: "ButtonRing",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/ButtonRing.tsx",
          type: "registry:example",
        },
      ],
    },

    // ___8______________________________________________________________________________________________

    CalendarDemo: {
      name: "Calendar",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCalendar.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCalendar,
    },

    CalendarDefaultDemo: {
      name: "Calendar",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCalendarDefault.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCalendarDefault,
    },

    CalendarPrimaryDemo: {
      name: "Calendar",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCalendarPrimary.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCalendarPrimary,
    },

    CalendarSuccessDemo: {
      name: "Calendar",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCalendarSuccess.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCalendarSuccess,
    },

    Calendar: {
      name: "Calendar",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Calendar.tsx",
          type: "registry:example",
        },
      ],
    },

    // ____9_____________________________________________________________________________________________

    CardDemo: {
      name: "Card",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewCard.tsx", type: "registry:example" },
      ],
      component: PreviewCard,
    },

    Card: {
      name: "Card",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Card.tsx",
          type: "registry:example",
        },
      ],
    },

    // _____10____________________________________________________________________________________________

    CarouselDemo: {
      name: "Carousel",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCarousel.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCarousel,
    },

    CarouselWithAutoplayIntervalsDemo: {
      name: "Carousel",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCarouselWithAutoplayIntervals.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCarouselWithAutoplayIntervals,
    },

    Carousel: {
      name: "Carousel",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Carousel.tsx",
          type: "registry:example",
        },
      ],
    },

    // ______11___________________________________________________________________________________________

    CheckBoxDemo: {
      name: "CheckBox",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCheckBox.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCheckBox,
    },

    CheckBoxDefaultDemo: {
      name: "CheckBox",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCheckBoxDefault.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCheckBoxDefault,
    },

    CheckBoxDarkDemo: {
      name: "CheckBox",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCheckBoxDark.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCheckBoxDark,
    },

    CheckBoxSuccessDemo: {
      name: "CheckBox",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCheckBoxSuccess.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCheckBoxSuccess,
    },

    CheckBoxDangerDemo: {
      name: "CheckBox",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewCheckBoxDanger.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewCheckBoxDanger,
    },

    CheckBox: {
      name: "CheckBox",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/CheckBox.tsx",
          type: "registry:example",
        },
      ],
    },

    // ________12_________________________________________________________________________________________

    DrawerDemo: {
      name: "Drawer",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewDrawer.tsx", type: "registry:example" },
      ],
      component: PreviewDrawer,
    },

    DrawerTopDemo: {
      name: "Drawer",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewDrawerTop.tsx", type: "registry:example" },
      ],
      component: PreviewDrawerTop,
    },

    DrawerBottomDemo: {
      name: "Drawer",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewDrawerBottom.tsx", type: "registry:example" },
      ],
      component: PreviewDrawerBottom,
    },

    DrawerLeftDemo: {
      name: "Drawer",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewDrawerLeft.tsx", type: "registry:example" },
      ],
      component: PreviewDrawerLeft,
    },

    DrawerRightDemo: {
      name: "Drawer",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewDrawerRight.tsx", type: "registry:example" },
      ],
      component: PreviewDrawerRight,
    },

    Drawer: {
      name: "Drawer",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Drawer.tsx",
          type: "registry:example",
        },
      ],
    },

    // __________13_______________________________________________________________________________________

    DropdownMenuDemo: {
      name: "DropdownMenu",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewDropdownMenu.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewDropdownMenu,
    },

    DropdownMenu: {
      name: "DropdownMenu",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/DropdownMenu.tsx",
          type: "registry:example",
        },
      ],
    },

    // ____________14_____________________________________________________________________________________

    InfiniteCarouselDemo: {
      name: "InfiniteCarousel",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewInfiniteCarousel.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewInfiniteCarousel,
    },

    InfiniteCarouselWithPauseDemo: {
      name: "InfiniteCarousel",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewInfiniteCarouselWithPause.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewInfiniteCarouselWithPause,
    },

        InfiniteCarouselWithoutPauseDemo: {
      name: "InfiniteCarousel",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewInfiniteCarouselWithoutPause.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewInfiniteCarouselWithoutPause,
    },

    InfiniteCarousel: {
      name: "InfiniteCarousel",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/InfiniteCarousel.tsx",
          type: "registry:example",
        },
      ],
    },

    // ______________15___________________________________________________________________________________

    InputDemo: {
      name: "Input",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewInput.tsx", type: "registry:example" },
      ],
      component: PreviewInput,
    },

    InputTextDemo: {
      name: "Input",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewInputText.tsx", type: "registry:example" },
      ],
      component: PreviewInputText,
    },

    InputEmailDemo: {
      name: "Input",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewInputEmail.tsx", type: "registry:example" },
      ],
      component: PreviewInputEmail,
    },

    InputPasswordDemo: {
      name: "Input",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewInputPassword.tsx", type: "registry:example" },
      ],
      component: PreviewInputPassword,
    },

    InputNumberDemo: {
      name: "Input",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewInputNumber.tsx", type: "registry:example" },
      ],
      component: PreviewInputNumber,
    },

    Input: {
      name: "Input",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Input.tsx",
          type: "registry:example",
        },
      ],
    },

    // ________________16_________________________________________________________________________________

    InputOTPDemo: {
      name: "InputOTP",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewInputOTP.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewInputOTP,
    },

    InputOTPWithSixBoxesDemo: {
      name: "InputOTP",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewInputOTPSixBoxes.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewInputOTPSixBoxes,
    },

    InputOTP: {
      name: "InputOTP",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/InputOTP.tsx",
          type: "registry:example",
        },
      ],
    },

    // __________________17_______________________________________________________________________________

    LabelDemo: {
      name: "Label",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewLabel.tsx", type: "registry:example" },
      ],
      component: PreviewLabel,
    },

    Label: {
      name: "Label",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Label.tsx",
          type: "registry:example",
        },
      ],
    },

    // ____________________18_____________________________________________________________________________

    NavigationMenuDemo: {
      name: "NavigationMenu",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewNavigationMenu.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewNavigationMenu,
    },

    NavigationMenu: {
      name: "NavigationMenu",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/NavigationMenu.tsx",
          type: "registry:example",
        },
      ],
    },

    // ______________________19___________________________________________________________________________

    NavigationMenuMacDemo: {
      name: "NavigationMenuMac",
      type: "registry:example",
      registryDependencies: ["Tooltip"],
      files: [
        {
          path: "content/Preview/PreviewNavigationMenuMac.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewNavigationMenuMac,
    },

    NavigationMenuMacWithTooltipDemo: {
      name: "NavigationMenuMac",
      type: "registry:example",
      registryDependencies: ["Tooltip"],
      files: [
        {
          path: "content/Preview/PreviewNavigationMenuMacWithTooltip.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewNavigationMenuMacWithTooltip,
    },

    NavigationMenuMac: {
      name: "NavigationMenuMac",
      type: "registry:example",
      registryDependencies: ["Tooltip"],
      files: [
        {
          path: "registry/default/displayui/NavigationMenuMac.tsx",
          type: "registry:example",
        },
      ],
    },

    // ________________________20_________________________________________________________________________

    RadioGroupsDemo: {
      name: "RadioGroups",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewRadioGroups.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewRadioGroups,
    },

    RadioGroupsDefaultDemo: {
      name: "RadioGroups",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewRadioGroupsDefault.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewRadioGroupDefault,
    },

    RadioGroupsWarningDemo: {
      name: "RadioGroups",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewRadioGroupsWarning.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewRadioGroupWarning,
    },

    RadioGroupsSuccessDemo: {
      name: "RadioGroups",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewRadioGroupsSuccess.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewRadioGroupSuccess,
    },

    RadioGroupsDangerDemo: {
      name: "RadioGroups",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewRadioGroupsDanger.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewRadioGroupDanger,
    },

    RadioGroups: {
      name: "RadioGroups",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/RadioGroups.tsx",
          type: "registry:example",
        },
      ],
    },

    // __________________________21_______________________________________________________________________

    SeparatorDemo: {
      name: "Separator",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewSeparator.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewSeparator,
    },


    SeparatorVerticalDemo: {
      name: "Separator",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewSeparatorVertical.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewSeparatorVertical,
    },


    SeparatorHorizontalDemo: {
      name: "Separator",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewSeparatorHorizontal.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewSeparatorHorizontal,
    },

    Separator: {
      name: "Separator",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Separator.tsx",
          type: "registry:example",
        },
      ],
    },

    // ____________________________22_____________________________________________________________________

    TableDemo: {
      name: "Table",
      type: "registry:example",
      files: [
        { path: "content/Preview/PreviewTable.tsx", type: "registry:example" },
      ],
      component: PreviewTable,
    },

    Table: {
      name: "Table",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Table.tsx",
          type: "registry:example",
        },
      ],
    },

    // ______________________________23___________________________________________________________________

    ToasterDemo: {
      name: "Toaster",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewToaster.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewToaster,
    },

    ToasterInfoDemo: {
      name: "Toaster",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewToaster.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewToasterInfo,
    },

    ToasterWarningDemo: {
      name: "Toaster",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewToaster.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewToasterWarning,
    },

    ToasterSuccessDemo: {
      name: "Toaster",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewToaster.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewToasterSuccess,
    },

    ToasterErrorDemo: {
      name: "Toaster",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewToaster.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewToasterError,
    },

    Toaster: {
      name: "Toaster",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Toaster.tsx",
          type: "registry:example",
        },
      ],
    },

    // ________________________________24_________________________________________________________________

    TooltipDemo: {
      name: "Tooltip",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewTooltip.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewTooltip,
    },

    TooltipDefaultDemo: {
      name: "Tooltip",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewTooltipDefault.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewTooltipDefault,
    },

    TooltipTopDemo: {
      name: "Tooltip",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewTooltipTop.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewTooltipTop,
    },

    TooltipBottomDemo: {
      name: "Tooltip",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewTooltipBottom.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewTooltipBottom,
    },

    TooltipLeftDemo: {
      name: "Tooltip",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewTooltipLeft.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewTooltipLeft,
    },

    TooltipRightDemo: {
      name: "Tooltip",
      type: "registry:example",
      files: [
        {
          path: "content/Preview/PreviewTooltipRight.tsx",
          type: "registry:example",
        },
      ],
      component: PreviewTooltipRight,
    },

    Tooltip: {
      name: "Tooltip",
      type: "registry:example",
      files: [
        {
          path: "registry/default/displayui/Tooltip.tsx",
          type: "registry:example",
        },
      ],
    },

    // _________________________________________________________________________________________________
  },
}

// Utilities are NOT React components
export const utils = {
  cn: require("@/registry/lib/utils").cn,
}
