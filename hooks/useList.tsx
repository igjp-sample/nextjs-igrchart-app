import dynamic from "next/dynamic";
import React, { LegacyRef } from "react";
import { IgrList, IIgrListProps } from "igniteui-react";
import { IgrListItem, IIgrListItemProps } from "igniteui-react";
import { IgrListHeader, IIgrListHeaderProps } from "igniteui-react";

// ref インターフェース
interface IIgnListProps extends IIgrListProps {
//  listRef: LegacyRef<IgrList>;
}
interface IIgnListItemProps extends IIgrListItemProps {
//  listItemRef: LegacyRef<IgrListItem>;
}
interface IIgnListHeaderProps extends IIgrListHeaderProps {
//  listHeaderRef: LegacyRef<IgrListHeader>;
}

export const IgnList = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrList, 
      IgrListModule ,
     } = await import(
      "igniteui-react"
    );

    IgrListModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrListComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnListComponent = ({
//      listRef,
      ...props
    }: IIgnListProps) => {
//      return <IgrList ref={listRef} {...props} />;
      return <IgrList {...props} />;
    };

    return IgnListComponent;
  },
  { ssr: false }
);

export const IgnListItem = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrListItemModule, 
     } = await import(
      "igniteui-react"
    );

    IgrListItemModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrListItemComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnListItemComponent = ({
//      listItemRef,
      ...props
    }: IIgnListItemProps) => {
//      return <IgrListItem ref={listItemRef} {...props} />;
      return <IgrListItem {...props} />;
    };

    return IgnListItemComponent;
  },
  { ssr: false }
);

export const IgnListHeader = dynamic(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { 
      IgrListHeaderModule, 
     } = await import(
      "igniteui-react"
    );

    IgrListHeaderModule.register();

    // ダイナミックインポートが完了したことを確認するためのログ
    console.log("IgrListHeaderComponent dynamically imported.");

    // refを設定するために新しく表示用のコンポーネントを作成
    const IgnListHeaderComponent = ({
//      listHeaderRef,
      ...props
    }: IIgnListHeaderProps) => {
//      return <IgrListHeader ref={listHeaderRef} {...props} />;
      return <IgrListHeader {...props} />;
    };

    return IgnListHeaderComponent;
  },
  { ssr: false }
);
