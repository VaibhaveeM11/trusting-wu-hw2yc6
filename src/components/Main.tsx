import React, { useEffect, useState } from "react";
import SideNav from "./SideNav/SideNav";
import Header from "./Header/Header";
import { StyledMainContainer, StyledLayoutContainer } from "./MainStyle";
import Chart from "./Charts/Charts";
import { ApiResponse, ActivityMeta } from "./MainTypes";

const Main: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDevUserData = async () => {
    try {
      const resp = await fetch("/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!resp.ok) {
        throw new Error(`Error status: ${resp.status}`);
      }
      const data: ApiResponse = await resp.json();
      console.log(resp, "resp");
      setData(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevUserData();
  }, [data]);

  const activityMeta: ActivityMeta[] =
    data?.data.AuthorWorklog.activityMeta || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledLayoutContainer>
      <SideNav />
      <StyledMainContainer>
        <Header />
        {data && <Chart data={data} activityMeta={activityMeta} />}
      </StyledMainContainer>
    </StyledLayoutContainer>
  );
};

export default Main;
