import React, { useState } from 'react';

function GroupsPage() {
  const [groups, setGroups] = useState([
    { id: 1, name: 'Bilgisayar Mühendisliği', members: 120, description: 'Bilgisayar Mühendisliği öğrencileri için grup', joined: false },
    { id: 2, name: 'Fırat Spor Kulübü', members: 85, description: 'Spor etkinlikleri ve duyurular', joined: false },
    { id: 3, name: 'Yazılım Geliştirme', members: 64, description: 'Kod paylaşımı ve projeler', joined: false },
  ]);

  const handleJoin = (id) => {
    setGroups(groups.map(group =>
      group.id === id
        ? { ...group, joined: !group.joined, members: group.joined ? group.members - 1 : group.members + 1 }
        : group
    ));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Gruplar</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        {groups.map(group => (
          <div key={group.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 15, background: '#fff', minWidth: 200 }}>
            <h2>{group.name}</h2>
            <p>{group.description}</p>
            <p style={{ color: '#666' }}>{group.members} üye</p>
            <button
              onClick={() => handleJoin(group.id)}
              style={{
                backgroundColor: group.joined ? '#aaa' : '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: 4,
                cursor: 'pointer',
                marginTop: 10
              }}
            >
              {group.joined ? 'Katıldın' : 'Katıl'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupsPage;