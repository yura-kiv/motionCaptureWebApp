import { FC, useContext, useEffect } from "react";
import s from "./CategoryFitler.module.scss";
import { NodesContext } from "../../contexts/nodesContext";

type CategoryFitlerProps = {
  label: string;
  activeFilter: string | null;
  filters: { label: string; value: string }[];
  setFilter: (filter: string | null) => void;
  page: string;
};

const CategoryFitler: FC<CategoryFitlerProps> = ({
  label,
  filters,
  setFilter,
  activeFilter,
  page,
}) => {
  const { addHoverNode, removeHoverNode } = useContext(NodesContext);

  useEffect(() => {
    return () => {
      filters.forEach((filter) =>
        removeHoverNode(`${page}_filter${filter.value}`)
      );
    };
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.label}>{label}</div>
      <div className={s.filters}>
        {filters.map((filter) => {
          const hoverId = `${page}_filter${filter.value}`;
          return (
            <div
              className={`${s.filter} ${
                activeFilter === filter.value && s.active
              }`}
              onClick={() =>
                filter.value === activeFilter
                  ? setFilter(null)
                  : setFilter(filter.value)
              }
              ref={(ref) =>
                addHoverNode({
                  id: hoverId,
                  ref,
                  hoverClassName: "categoryFilter",
                })
              }
            >
              {filter.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFitler;
